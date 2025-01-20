import React, { useState } from 'react';
import styles from './Modal.module.scss';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    productName: string;
    price: number;
    photo: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, productName, price, photo }) => {
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleBuy = () => {
        alert(`Comprado ${quantity} unidade(s) de ${productName}`);
        onClose();
    };

    if (!isOpen) return null;

    const totalPrice = price * quantity;

    return (
        <div className={styles['modal-overlay']} onClick={onClose}>
            <div className={styles['modal-content']} onClick={(e) => e.stopPropagation()}>
                <div className={styles['modal-header']}>
                    <button className={styles['close-button']} onClick={onClose}>
                        &#10005;
                    </button>
                </div>

                <div className={styles['modal-body']}>
                    <div className={styles['modal-image']}>
                        <img src={photo} alt={productName} />
                    </div>

                    <div className={styles['modal-info']}>
                        <h2 className={styles['productName']}>{productName}</h2>
                        <p className={styles['price']}>Preço: R$ {totalPrice.toLocaleString("pt-BR")}</p>
                        <p className={styles['description']}>Ele possui várias funcionalidades incríveis e um design inovador.</p>
                        <p className={styles['more-info']}>Veja mais sobre esse produto &gt;</p>

                        <div className={styles['quantity-and-confirm']}>
                            <div className={styles['quantity-controls']}>
                                <button className={styles['quantity-button']} onClick={decrementQuantity}>-</button>
                                <span className={styles['quantity-display']}>{quantity}</span>
                                <button className={styles['quantity-button']} onClick={incrementQuantity}>+</button>
                            </div>

                            <button className={styles['confirm-button']} onClick={handleBuy}>
                                Comprar
                            </button>
                        </div>
                    </div>
                </div>

                <div className={styles['modal-footer']}></div>
            </div>
        </div>
    );
};

export default Modal;
