using System;
using System.Collections.Generic;

enum Burgers
{
    CHEESE,
    DELUXECHEESE,
    VEGAN,
    DELUXEVEGAN
}

abstract class Burger
{
    protected string name;
    protected string bread;
    protected string sauce;
    protected List<string> toppings = new List<string>();

    public virtual void Prepare() {}
    public virtual void Cook() {}
    public virtual void Serve() {}

    public string GetName()
    {
        return name;
    }
}

class CheeseBurger : Burger
{
    public CheeseBurger()
    {
        name = "Cheese Burger";
        // ... set the name, bread, and sauce
    }
}

class DeluxeCheeseBurger : Burger
{
    public DeluxeCheeseBurger()
    {
        name = "Deluxe Cheese Burger";
        // ... set the name, bread, and sauce
    }
}

class VeganBurger : Burger
{
    public VeganBurger()
    {
        name = "Vegan Burger";
        // ... set the name, bread, and sauce
    }
}

class DeluxeVeganBurger : Burger
{
    public DeluxeVeganBurger()
    {
        name = "Deluxe Vegan Burger";
        // ... set the name, bread, and sauce
    }
}

abstract class BurgerStore
{
    public abstract Burger CreateBurger(Burgers item);

    public Burger OrderBurger(Burgers type)
    {
        Burger burger = CreateBurger(type);
        Console.WriteLine($"--- Making a {burger.GetName()} ---");
        burger.Prepare();
        burger.Cook();
        burger.Serve();
        return burger;
    }
}

class CheeseBurgerStore : BurgerStore
{
    public override Burger CreateBurger(Burgers item)
    {
        if (item == Burgers.CHEESE)
        {
            return new CheeseBurger();
        }
        else if (item == Burgers.DELUXECHEESE)
        {
            return new DeluxeCheeseBurger();
        }
        else
        {
            return null;
        }
    }
}

class VeganBurgerStore : BurgerStore
{
    public override Burger CreateBurger(Burgers item)
    {
        if (item == Burgers.VEGAN)
        {
            return new VeganBurger();
        }
        else if (item == Burgers.DELUXEVEGAN)
        {
            return new DeluxeVeganBurger();
        }
        else
        {
            return null;
        }
    }
}

class Program
{
    static void Main(string[] args)
    {
        BurgerStore cheeseStore = new CheeseBurgerStore();
        BurgerStore veganStore = new VeganBurgerStore();

        Burger burger = cheeseStore.OrderBurger(Burgers.CHEESE);
        Console.WriteLine($"Ethan ordered a {burger.GetName()}");

        burger = veganStore.OrderBurger(Burgers.DELUXEVEGAN);
        Console.WriteLine($"Joel ordered a {burger.GetName()}");
    }
}
