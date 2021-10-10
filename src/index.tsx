import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ContentWrapper } from './components/ContentWrapper';
import { PostsList } from './screens/PostsList';
import { store } from './store';
import './styles/index.css';
import { myTheme } from './styles/theme';
import { PostDetails } from './screens/PostDetails';
import { AppBackground } from './components/AppBackground';
import { CreatePost } from './screens/CreatePost';

const App = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <Provider store={store}>
        <BrowserRouter>
          <AppBackground>
            <ContentWrapper>
              <Route exact path='/' component={PostsList} />
              <Route exact path='/post/:id' component={PostDetails} />
              <Route exact path='/create-post' component={CreatePost} />
            </ContentWrapper>
          </AppBackground>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
