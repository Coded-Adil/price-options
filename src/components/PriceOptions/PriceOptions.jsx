import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Plan",
            "features": [
                "Access to gym equipment",
                "Free water bottle",
                "Locker access"
            ],
            "price": 19.99
        },
        {
            "id": 2,
            "name": "Standard Plan",
            "features": [
                "Access to gym equipment",
                "Access to group classes",
                "Free water bottle",
                "Locker access"
            ],
            "price": 29.99
        },
        {
            "id": 3,
            "name": "Premium Plan",
            "features": [
                "24/7 gym access",
                "Access to all classes",
                "Personal training sessions",
                "Free water bottle & gym towel",
                "Locker access"
            ],
            "price": 49.99
        },
        {
            "id": 4,
            "name": "VIP Plan",
            "features": [
                "All Premium Plan features",
                "Unlimited personal training",
                "Free supplements",
                "Diet consultation",
                "Private locker"
            ],
            "price": 79.99
        }
    ]

    return (
        <div className="m-12">
            <h2 className="text-5xl mb-10">Best Prices in the town</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;