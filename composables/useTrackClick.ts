/**
 * Tracks marketplace link clicks to the `analytics_link_product_click` Supabase table.
 *
 * Table schema (run once in Supabase SQL editor):
 *
 *   create table analytics_link_product_click (
 *     id         bigint generated always as identity primary key,
 *     deck_slug  text        not null,
 *     platform   text        not null,
 *     page       text        not null,
 *     clicked_at timestamptz not null default now()
 *   );
 */

const DEBOUNCE_MS = 1500

// Module-level map so debounce persists across component re-renders
// Key: `${deckSlug}:${platform}` → last click timestamp
const lastClickTime = new Map<string, number>()

export function useTrackClick() {
    const supabase = useSupabaseClient()

    async function trackClick(deckSlug: string, platform: string, page: string) {
        const key = `${deckSlug}:${platform}`
        const now = Date.now()

        if (now - (lastClickTime.get(key) ?? 0) < DEBOUNCE_MS) return

        lastClickTime.set(key, now)

        try {
            await supabase.from('analytics_link_product_click').insert({
                deck_slug: deckSlug,
                platform,
                page,
            })
        } catch {
            // Analytics failure must never interrupt navigation
        }
    }

    return { trackClick }
}
