/**
 * The `formatPrice` function takes a number as input and returns a formatted string representing the
 * price in Norwegian Krone (NOK) currency.
 * @param {number} price - The `price` parameter is a number representing the price value that needs to
 * be formatted.
 * @returns a formatted price as a string, using the "no-NB" locale, with the currency style set to
 * "NOK" (Norwegian Krone), and with no decimal places.
 */
export default function FormatPrice({price, bold}: {price: number; bold?: boolean;}) {
  return (
    <span className={`${bold && "font-bold"} `}>
      {price.toLocaleString("no-NB", {
        style: "currency",
        currency: "NOK",
        maximumFractionDigits: 0,
      })}
    </span>
  );
}
