export default function formatMoney(amount: number, currency: string): string {
  const options = {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }

  const formatter = new Intl.NumberFormat(
    currency === "USD" ? "en-US" : "es-MX",
    options
  )

  return formatter.format(amount / 100)
}
