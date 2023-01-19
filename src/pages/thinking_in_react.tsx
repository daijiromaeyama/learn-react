import { useState } from 'react'

type Product = {
  category: string
  price: string
  stocked: boolean
  name: string
}

function ProductCategoryRow( { category }: { category: string }): JSX.Element {
  return (
    <tr>
      <th colSpan={2}>
        {category}
      </th>
    </tr>
  )
}

function ProductRow({ product }: { product: Product }): JSX.Element {
  const name: string | JSX.Element = product.stocked ? product.name :
    <span style={{ color: 'red'}}>
      {product.name}
    </span>

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
}

function ProductTable({ products, filterText, inStockOnly }: { products: Product[], filterText: string, inStockOnly: boolean }): JSX.Element {
  const rows: JSX.Element[] = []
  let lastCategory: string | null = null

  products.forEach((product: Product) => {
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return
    }
    if (inStockOnly && !product.stocked) {
      return
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      )
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name}
      />
    )
    lastCategory = product.category
  })

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }:
  {
    filterText: string,
    inStockOnly: boolean,
    onFilterTextChange: (filterText: string) => void,
    onInStockOnlyChange: (inStockOnly: boolean) => void
  }): JSX.Element {
  return (
    <form>
      <input
        type='text'
        value={filterText}
        placeholder='Search...'
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input
          type='checkbox'
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />
        {' '}
        Only show products in stock
      </label>
    </form>
  )
}

function FilterableProductTable({ products }: { products: Product[] }): JSX.Element {
  const [filterText, setFilterText] = useState<string>('')
  const [inStockOnly, setInStockOnly] = useState<boolean>(false)

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  )
}

const PRODUCTS: Product[] = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' }
]

export default function ThinkingInReact(): JSX.Element {
  return <FilterableProductTable products={PRODUCTS} />
}
