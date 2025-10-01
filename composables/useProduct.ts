export const decks = [
    {
        slug: 'berani-gak',
        title: 'Berani Gak?',
        sku: 'ttk-c-bg-1',
        imageSrc: '/images/cards/bg1-4x5.webp',
		imageAlt: "Card variant Berani Gak?",
        tags: ['fun', 'challenge'],
        is_topseller: false,
        occasion: ['nongkrong']
    },
    {
        slug: 'deep',
        title: 'Deep',
        sku: 'ttk-c-deep-1',
        imageSrc: '/images/cards/deep1-4x5.webp',
		imageAlt: "Card variant Deep",
        tags: ['date', 'relationship', 'deep talk'],
        is_topseller: true,
        occasion: ['deep talk', 'date', 'couple', 'relationship']
    },
    {
        slug: 'hangout',
        title: 'Hangout',
        sku: 'ttk-c-hangout-1',
        imageSrc: '/images/cards/hangout1-4x5.webp',
		imageAlt: "Card variant Hangout",
        tags: ['fun', 'challenge'],
        is_topseller: true,
        occasion: ['nongkrong', 'date']
    },
    {
        slug: 'tot',
        title: 'This or That',
        sku: 'ttk-c-tot-1',
        imageSrc: '/images/cards/tot1-4x5.webp',
		imageAlt: "Card variant This or That",
        tags: ['fun', 'first date'],
        is_topseller: false,
        occasion: ['nongkrong', 'first date', 'ice breaking']
    },
    {
        slug: 'badboy',
        title: 'Badboy',
        sku: 'ttk-c-badboy-1',
        imageSrc: '/images/cards/badboy1-4x5.webp',
		imageAlt: "Card variant Bad Boy",
        tags: ['fun', 'challenge'],
        is_topseller: false,
        occasion: ['nongkrong', 'night talk']
    },
    {
        slug: 'family99',
        title: 'Family 99',
        sku: 'ttk-c-family99-1',
        imageSrc: '/images/cards/family991-4x5.webp',
		imageAlt: "Card variant Family 99",
        tags: ['fun', 'challenge', 'games'],
        is_topseller: true,
        occasion: ['nongkrong', 'ice breaking', 'gathering party']
    },
    {
        slug: 'tot-2',
        title: 'This or That 2',
        sku: 'ttk-c-tot-2',
        imageSrc: '/images/cards/tot21-4x5.webp',
		imageAlt: "Card variant This or That 2",
        tags: ['fun', 'first date'],
        is_topseller: true,
        occasion: ['nongkrong', 'first date', 'ice breaking', 'gathering party']
    },
]

export const decksTopSellers = decks.filter(deck => deck.is_topseller)