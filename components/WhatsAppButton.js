"use client";
import { useCart } from '../app/context/CartContext'; 
import { useState } from 'react';

const WhatsAppButton = ({ inputs, items }) => {
    const { clearCart } = useCart();
    const [error, setError] = useState(null);

    const createOrder = () => {
        fetch('api/sendOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                items,
                inputs 
            })
        });
    };

    const handleClick = async () => {
        if (!validateInputs(inputs)) {
            setError('All fields are required.');
            return;
        }

        const { url, isAndroidIntent } = createWhatsAppURL(inputs, items);

        if (isAndroidIntent) {
            window.location.href = url; // Use intent on Android
        } else {
            window.open(url, '_blank'); // Fallback for iOS or desktop
        }

        createOrder();
        clearCart();
        setError(null);
    };

    const validateInputs = (inputs) => {
        const { address, fname, lname, phone } = inputs;
        return address && fname && lname && phone;
    };

    return (
        <div className='container'>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <span className="ProvidersSingleProduct--selected">
                <button onClick={handleClick} type="button" className="AddToCart HtmlProductAddToCart" style={{ borderRadius: "0" }}  >
                    <span>Order Now!</span>
                </button>
            </span> 
        </div>
    );
};

export default WhatsAppButton;


const createWhatsAppURL = (inputs, items) => {
    const { address, fname, lname, phone } = inputs;

    const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const colorNameMap = {
        "#FF0000": "Red",
        "#00FF00": "Green",
        "#0000FF": "Blue",
        "#FF00FF": "Magenta",
        "#00FFFF": "Cyan",
        "#FFFFFF": "White",
        "#000000": "Black",
        "#ffdc7a": "LightYellow",
        "#A52A2A": "Brown",
        "#800080": "Purple",
        "#FFD700": "Gold",
        "#008000": "DarkGreen",
        "#808080": "Gray",
        "#8B4513": "SaddleBrown",
    };

    const getColorName = (hexCode) => colorNameMap[hexCode] || 'N/A';

    const message = `
*Customer Information:*
Name: ${fname} ${lname}
Phone: ${phone}
Address: ${address}

*Order Details:*
${items.map((item, index) => `
Item ${index + 1}:
- Name: ${item.title}
- Quantity: ${item.quantity}
- Price: $${item.price}
- Size: ${item.size || 'N/A'}
- Color: ${getColorName(item.color)}
- Image: ${item.img?.[0] || 'No image'}
`).join('\n')}

Subtotal: $${totalAmount.toFixed(2)}
Delivery fee: $5.00
*Total Amount:* $${(totalAmount + 5).toFixed(2)}
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    
    // ✅ Make sure phone number has NO "+" and NO spaces
    const phoneNumber = '9613066976';

    const isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);

    if (isAndroid) {
        // ✅ Proper format for WhatsApp Business intent
        const intentURL = `intent://send?phone=${phoneNumber}&text=${encodedMessage}#Intent;scheme=smsto;package=com.whatsapp.w4b;end`;
        return { url: intentURL, isAndroidIntent: true };
    } else {
        const waUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        return { url: waUrl, isAndroidIntent: false };
    }
};
