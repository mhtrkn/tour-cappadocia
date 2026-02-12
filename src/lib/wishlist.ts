export const WISHLIST_KEY = 'tourWishlist';

export interface WishlistItem {
  slug: string;
  addedAt: number;
}

export const addToWishlist = (slug: string): void => {
  if (typeof window === 'undefined') return;

  const wishlist = getWishlist();
  const exists = wishlist.find(item => item.slug === slug);

  if (!exists) {
    const newWishlist = [...wishlist, { slug, addedAt: Date.now() }];
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(newWishlist));

    window.dispatchEvent(new CustomEvent('wishlistChange', {
      detail: { action: 'add', slug }
    }));
  }
};

export const removeFromWishlist = (slug: string): void => {
  if (typeof window === 'undefined') return;

  const wishlist = getWishlist();
  const newWishlist = wishlist.filter(item => item.slug !== slug);
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(newWishlist));

  window.dispatchEvent(new CustomEvent('wishlistChange', {
    detail: { action: 'remove', slug }
  }));
};

export const getWishlist = (): WishlistItem[] => {
  if (typeof window === 'undefined') return [];

  try {
    const wishlist = localStorage.getItem(WISHLIST_KEY);
    return wishlist ? JSON.parse(wishlist) : [];
  } catch {
    return [];
  }
};

export const isInWishlist = (slug: string): boolean => {
  const wishlist = getWishlist();
  return wishlist.some(item => item.slug === slug);
};

export const getWishlistSlugs = (): string[] => {
  return getWishlist().map(item => item.slug);
};

export const clearWishlist = (): void => {
  if (typeof window === 'undefined') return;

  localStorage.removeItem(WISHLIST_KEY);
  window.dispatchEvent(new CustomEvent('wishlistChange', {
    detail: { action: 'clear' }
  }));
};
