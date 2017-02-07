export const currencyFormat = (amount, currency = '¥') => {
    amount = amount.replace(/(\d)(?=(\d{3})$)/g, '$1,');
    return currency + amount;
};