abstract class Pizza {
    public name!: string;
    public dough!: string;
    public sauce!: string;
    public toppings!: string[];

    prepare(): void {
        console.log("Prepare " + this.name);
        console.log("Tossing dough...");
        console.log("Adding sauce...");
        console.log("Adding toppings: ");
        for (let topping of this.toppings) {
            console.log("    " + topping);
        }
    }

    bake(): void {
        console.log("Bake for 25 minutes at 350");
    }

    cut(): void {
        console.log("Cut the pizza into diagonal slices");
    }

    box(): void {
        console.log("Place pizza in PizzaStore box");
    }

    public getName(): string {
        return this.name;
    }
}

export default Pizza;
