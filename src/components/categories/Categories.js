import { useDispatch, useSelector } from 'react-redux';
import { setActiveCategory } from '../../redux/categories/slice';

import Spinner from '../spinner/Spinner';

import { CategoriesContainer, CategoryItem } from './categories-style';

const Categories = () => {
  const { categories, activeCategory } = useSelector((state) => state.categories);
  const { status } = useSelector((state) => state.items);

  const dispatch = useDispatch();

  const onChangeCategory = (id) => {
    dispatch(setActiveCategory(Number(id)));
  };

  const style = {
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    background: 'rgba(255, 255, 255, 0.01)',
  };

  return (
    <div style={style}>
      <CategoriesContainer>
        {status === 'loading' ? (
          <Spinner />
        ) : status === 'error' ? (
          <h1>Error</h1>
        ) : (
          categories.map((category) => {
            const active = activeCategory === category.id ? 'active' : '';

            return (
              <CategoryItem
                className={`${active}`}
                key={category.id}
                data-tab={category.id}
                onClick={(e) => onChangeCategory(e.target.dataset.tab)}
              >
                {category.name}
              </CategoryItem>
            );
          })
        )}
      </CategoriesContainer>
    </div>
  );
};

export default Categories;
