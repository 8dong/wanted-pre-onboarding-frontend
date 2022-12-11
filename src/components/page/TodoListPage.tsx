import PageLayout from '../layout/PageLayout';
import TodoListSection from '../../components/UI/organisms/TodoListSection';

const TodoListPage = () => {
  return (
    <PageLayout pageTitle='Todo List Page'>
      <TodoListSection />
    </PageLayout>
  );
};

export default TodoListPage;
