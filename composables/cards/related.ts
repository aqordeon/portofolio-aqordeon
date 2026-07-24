import { decks } from '../useProduct'
import { useDecksLP } from './decks_lp'

interface DeckSummary {
    slug: string
    title: string
    imageSrc: string
    imageAlt: string
    tags?: string[]
    occasion?: string[]
    is_topseller?: boolean
    rating?: number
    rating_count?: number
}

/**
 * A hand-written companion relation between two decks: one deck is the direct
 * follow-up (or prequel) of the other, so it deserves a banner rather than a
 * slot in the generic "kartu lain" grid. Tag overlap can't know that This or
 * That 2 continues This or That — that link is editorial, so it lives here.
 *
 * Pairs are one-way entries: write both directions to cross-link a series.
 */
export interface DeckPair {
    /** Slug of the deck being recommended. Must have a landing page. */
    slug: string
    eyebrow: string
    headline: string
    body: string
    cta: string
}

export const deckPairs: Record<string, DeckPair> = {
    tot: {
        slug: 'tot-2',
        eyebrow: 'Serinya berlanjut',
        headline: 'Sudah main This or That? Lanjut ke This or That 2',
        body: '50 pertanyaan baru, dan kali ini tiap pilihan datang dengan konteksnya sendiri — jadi obrolannya nggak berhenti di "aku pilih yang ini", tapi lanjut ke kenapa.',
        cta: 'Lihat This or That 2',
    },
    'tot-2': {
        slug: 'tot',
        eyebrow: 'Ada seri pertamanya',
        headline: 'Belum punya This or That yang pertama?',
        body: 'Versi awal yang lebih ringan dan cepat: pilihan-pilihan simpel yang langsung bikin ngobrol. Enak dimainkan duluan sebelum masuk ke versi 2, atau digabung jadi satu dek besar.',
        cta: 'Lihat This or That',
    },
}

const allDecks = decks as DeckSummary[]
const landingPages = useDecksLP as Record<string, { price?: number } | undefined>

/** Decks without a landing page have nowhere to link to, so they never surface. */
const recommendableDecks = allDecks.filter(deck => !!landingPages[deck.slug])

const countOverlap = (a: string[] = [], b: string[] = []) =>
    a.filter(item => b.includes(item)).length

/**
 * Decks worth showing next to `slug`, best match first.
 *
 * Occasion is weighted double because it matches intent ("nongkrong", "first
 * date") rather than flavour, and a topseller nudge breaks ties toward the
 * cards that actually convert. The explicit pair (if any) is excluded — it
 * already has the banner above, and repeating it wastes a slot.
 */
export function getRelatedDecks(slug: string, limit = 4): DeckSummary[] {
    const current = recommendableDecks.find(deck => deck.slug === slug)
    if (!current) return []

    const pairSlug = deckPairs[slug]?.slug

    return recommendableDecks
        .filter(deck => deck.slug !== slug && deck.slug !== pairSlug)
        .map(deck => ({
            deck,
            score:
                countOverlap(current.occasion, deck.occasion) * 2 +
                countOverlap(current.tags, deck.tags) +
                (deck.is_topseller ? 0.5 : 0),
        }))
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map(entry => entry.deck)
}

/** The curated companion for `slug`, with the target deck's own data merged in. */
export function getDeckPair(slug: string) {
    const pair = deckPairs[slug]
    if (!pair) return null

    const deck = recommendableDecks.find(d => d.slug === pair.slug)
    if (!deck) return null

    return { ...pair, deck, price: landingPages[pair.slug]?.price }
}
