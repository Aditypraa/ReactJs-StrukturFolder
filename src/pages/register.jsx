import { Link } from "react-router-dom";
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register">
      <FormRegister />
      <p className="text-sm mt-5 text-center">
        Have an account?{" "}
        {/* ====== Penggunaan Tag <a> Tidak Baik atau tidak disarankan ====== */}
        {/* <a href="/register" className="font-bold text-blue-600">
          Sign Up
        </a> */}
        {/* ====== Ganti menggunakan <Link to=""/> ====== */}
        <Link to="/login" className="font-bold text-blue-600">
          Login
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default RegisterPage;
