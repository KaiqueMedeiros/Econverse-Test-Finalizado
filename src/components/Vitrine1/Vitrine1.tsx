import React, { useEffect, useState } from "react";
import styles from "./Vitrine1.module.scss";
import setaEsquerda from '../../assets/images/setaEsquerda.png';
import setaDireita from '../../assets/images/setaDireita.png';
import Modal from "../Modal/Modal"; 


interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

const Vitrine1: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        
        const response = await fetch(
          "https://cors-anywhere.herokuapp.com/https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
        );
        const data = await response.json();
        console.log("Dados recebidos:", data);
  
        
        if (data.success && Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error("Formato dos dados não esperado ou erro na resposta");
        }
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProducts();
  }, []);

  // 
  if (loading) {
    return <p>Carregando produtos...</p>;
  }

 
  const productsPerPage = 4;
  const startIndex = currentPage * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const visibleProducts = products.slice(startIndex, endIndex);

  
  const nextPage = () => {
    if (endIndex < products.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (startIndex > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

 
  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className={styles.vitrine}>
      <div className={styles.carousel}>
      
        <button className={styles.arrowButton} onClick={prevPage} disabled={startIndex === 0}>
          <img src={setaEsquerda} alt="Seta Esquerda" />
        </button>

        <div className={styles.productsContainer}>
          {visibleProducts.map((product, index) => (
            <div key={index} className={styles.productCard}>
             
              <img src={product.photo} alt={product.productName} className={styles.productImage} />

             
              <p className={styles.productDescription}>
                {product.descriptionShort || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
              </p>

             
              <div className={styles.priceContainer}>
                <span className={styles.originalPrice}>R$ 300,00</span>
                <span className={styles.realPrice}>
                  R$ {product.price.toLocaleString("pt-BR")}
                </span>
              </div>

              
              <p className={styles.installments}>Em até 2x de R$ {(product.price / 2).toFixed(2)} sem juros</p>

              
              <p className={styles.freeShipping}>Frete Grátis</p>

              
              <button
                className={styles.buyButton}
                onClick={() => handleOpenModal(product)}
              >
                Comprar
              </button>
            </div>
          ))}
        </div>

        
        <button className={styles.arrowButton} onClick={nextPage} disabled={endIndex >= products.length}>
          <img src={setaDireita} alt="Seta Direita" />
        </button>
      </div>

     
      {isModalOpen && selectedProduct && (
        <Modal
          productName={selectedProduct.productName}
          price={selectedProduct.price}
          photo={selectedProduct.photo}
          isOpen={isModalOpen}  
          onClose={() => setIsModalOpen(false)}
        />
      )}

    </div>
  );
};

export default Vitrine1;