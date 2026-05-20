import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { portfolio, colors } from '../data';
var Header = function () {
    return (_jsx("header", { className: "sticky top-0 z-50 shadow-md", style: { backgroundColor: colors.darkSlate }, children: _jsxs("nav", { className: "max-w-6xl mx-auto px-6 py-4 flex justify-between items-center", children: [_jsx(Link, { to: "/", className: "text-2xl font-bold", style: { color: colors.coral }, children: portfolio.name }), _jsxs("ul", { className: "flex gap-8", children: [_jsx("li", { children: _jsx(Link, { to: "/", className: "hover:opacity-80 transition-opacity", style: { color: colors.offWhite }, children: "Home" }) }), _jsx("li", { children: _jsx(Link, { to: "/projects", className: "hover:opacity-80 transition-opacity", style: { color: colors.offWhite }, children: "Projects" }) }), _jsx("li", { children: _jsx(Link, { to: "/experience", className: "hover:opacity-80 transition-opacity", style: { color: colors.offWhite }, children: "Experience" }) }), _jsx("li", { children: _jsx(Link, { to: "/designs", className: "hover:opacity-80 transition-opacity", style: { color: colors.offWhite }, children: "Designs" }) })] })] }) }));
};
export default Header;
