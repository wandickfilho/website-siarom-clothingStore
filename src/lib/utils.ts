export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

export function calculateInstallments(price: number, maxInstallments = 10): {
  installments: number;
  installmentValue: number;
  text: string;
} {
  const installments = Math.min(maxInstallments, Math.max(1, Math.floor(price / 40)));
  const installmentValue = price / installments;
  return {
    installments,
    installmentValue,
    text: `${installments}x de ${formatCurrency(installmentValue)} sem juros`,
  };
}

export function calculatePixPrice(price: number, discountPercent = 5): number {
  return price * (1 - discountPercent / 100);
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

