export const currency = (value: number|string) => {
    if (value === null || value === undefined || isNaN(Number(value))) {
        return 'Rp 0'
    }
    
    return Number(value).toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 })
}