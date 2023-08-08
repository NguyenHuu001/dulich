import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';
import Layout from './Layouts';
import express from 'express';
import authRouter from './backend/routes/auth.js'
function App() {
    const A = express();
    App.use(express.json());
    App.use('/api/auth', authRouter);
    App.listen(3000, () => {
        console.log('Server is running on port 3000');
      });
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
