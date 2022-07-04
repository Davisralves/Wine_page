import IWine from "../interfaces/WineInterface";

export const createCart = () => {
	if (typeof window !== "undefined") {
		const cartExist = localStorage.getItem("cart");
		if (cartExist) return true;
		else localStorage.setItem("cart", "[]");
	}
};

export const saveWineInCart = (item: IWine): number => {
	if (typeof window !== "undefined") {
		createCart();
		const actual_cart = JSON.parse(localStorage.getItem("cart") as string);
		const productInCart = actual_cart.find(({ id }: IWine) => id == item.id);
		if (!productInCart) {
			actual_cart.push(item);
			localStorage.setItem("cart", JSON.stringify(actual_cart));
		}
		return actual_cart.length;
	}
	return 0;
};

export const getCartFromLocalStorage = (): IWine[] | undefined => {
	if (typeof window !== "undefined") {
		const cart = localStorage.getItem("cart");
		return cart ? JSON.parse(cart) : undefined;
	}
};
