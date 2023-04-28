import CreateProductModal, { CreateProductModalProps } from './CreateProductModal';
import { useState } from 'react';

export default function EditProductModal(props: Omit<CreateProductModalProps, 'onSubmit'> & { productData: any, onSubmit: (productData: any) => void }) {
  const { productData, ...rest } = props;
  const [formData, setFormData] = useState(productData);

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onSubmit(formData);
  };

  return (
    <CreateProductModal
      {...rest}
      onSubmit={handleSubmit}
    >
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input type="text" name="productName" value={formData.productName} onChange={handleFormChange} />
        </label>
        <label>
          Product Description:
          <input type="text" name="productDescription" value={formData.productDescription} onChange={handleFormChange} />
        </label>
        <label>
          Product Price:
          <input type="text" name="productPrice" value={formData.productPrice} onChange={handleFormChange} />
        </label>
        <label>
          Product Image:
          <input type="text" name="productImage" value={formData.productImage} onChange={handleFormChange} />
        </label>
        <label>
          Number Of Purchases:
          <input type="text" name="numberOfPurchases" value={formData.numberOfPurchases} onChange={handleFormChange} />
        </label>
        <label>
          Available Products:
          <input type="text" name="availableProducts" value={formData.availableProducts} onChange={handleFormChange} />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </CreateProductModal>
  );
}
