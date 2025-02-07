"use client";
import { useCart } from '../app/context/CartContext'; 
import { useState } from 'react';

const WhatsAppButton = ({ inputs, items }) => {
    const { cart, removeFromCart, updateQuantity, clearCart, isModalOpen, toggleModal } = useCart();
    const [error, setError] = useState(null);


 
    

    const createOrder =  () => { 
        
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

        const url = createWhatsAppURL(inputs, items);
        window.open(url, '_blank');
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

    // Calculate the total amount
    const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // Formatting the message
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
      - Image: ${item.img[0]} 
    `).join('\n')}

    Subtotal: $${totalAmount.toFixed(2)}
    Delivery fee: $3.00
    *Total Amount:* $${(totalAmount + 3).toFixed(2)}
  `;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '9613066976';  
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
