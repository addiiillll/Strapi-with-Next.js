import { fetchProducts } from "./api/attar";

const Attars = ({ products }) => {
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.attributes.title}</li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
    const token = '6fc4d097a7edcdbfbe17f04e9f3d370e1fa6410cefaf44fc0eedc389da321830bac5319e7d79d6a4d1e3dec8b32c2874720976a63debdc4b5b2283322b8da8f43816c319c3aa7d582d8c21470a6e901fe3dd5fdeff0bc3f58973448f386f540c357cbad4465bd19d39ba4d67b807cd33b2248719b529f0572927bdf47b8f7088'; // Replace with your actual token
    try {
      const products = await fetchProducts(token);
  
      return {
        props: {
          products: products.data,
        },
      };
    } catch (error) {
      console.error('Error in getServerSideProps:', error.message);
      return {
        props: {
          products: [],
        },
      };
    }
  }
  

export default Attars;
