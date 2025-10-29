import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
    const cardSlug = getRouterParam(event, 'cardSlug')
    const client = await serverSupabaseClient(event)

    const { data } = await client.from('decks_lp').select('*').eq('slug', cardSlug)

    return data?.[0]
})
