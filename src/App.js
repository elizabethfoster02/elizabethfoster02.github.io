import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Designs from './pages/Designs';
var App = function () {
    return (_jsx(Router, { children: _jsxs("div", { className: "flex flex-col min-h-screen", style: { backgroundColor: '#f7f7ff' }, children: [_jsx(Header, {}), _jsx("main", { className: "flex-1", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/projects", element: _jsx(Projects, {}) }), _jsx(Route, { path: "/experience", element: _jsx(Experience, {}) }), _jsx(Route, { path: "/designs", element: _jsx(Designs, {}) })] }) }), _jsx(Footer, {})] }) }));
};
export default App;
