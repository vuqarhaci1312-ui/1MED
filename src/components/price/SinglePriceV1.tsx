const WHATSAPP_NUMBER_E164 = "994104277753";

interface DataType {
    id: number;
    title: string;
    trial: string;
    price?: number;
    currency?: string;
    suitability: string;
    features: string[];
}

interface PriceProps {
    activeServiceId: unknown;
    plan: DataType;
}

function whatsappOrderHref(packageTitle: string): string {
    const text = `Salam, ${packageTitle} xidməti ilə maraqlanıram.`;
    return `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${encodeURIComponent(text)}`;
}

const SinglePriceV1 = ({ plan, activeServiceId }: PriceProps) => {
    const { title, trial, currency, price, suitability, features } = plan || {};

    const showPrice = typeof price === "number" && price > 0 && currency;

    return (
        <>
            <div className={`pricing-style-one ${activeServiceId === plan.id ? "active" : ""}`}>
                <div className="left">
                    <div className="info">
                        <h4>{title}</h4>
                        <span>{trial}</span>
                    </div>
                    {showPrice ? (
                        <h2>
                            <sup>{currency}</sup>
                            {price}
                        </h2>
                    ) : null}
                    <a
                        className={`btn btn-sm circle effect ${activeServiceId === plan.id ? "btn-gradient" : "btn-light"}`}
                        href={whatsappOrderHref(title)}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Sifariş Et
                    </a>
                </div>
                <div className="right">
                    <h5>{suitability}</h5>
                    <ul>
                        {features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default SinglePriceV1;
