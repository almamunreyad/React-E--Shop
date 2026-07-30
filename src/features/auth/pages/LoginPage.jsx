import { useContext, useState } from "react";
import Button from "../../../shared/components/ui/Button";
import FormError from "../../../shared/components/ui/FormError";
import Input from "../../../shared/components/ui/Input";
import { login as loginService } from "../services/authService";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Auth Context
  const { login } = useContext(AuthContext);

  // navigate
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // form submit
  async function handleSubmit(event) {
    event.preventDefault();
    // console.log({ email, password });

    setError("");
    setLoading(true);

    try {
      const response = await loginService(email, password);
      // console.log(response);

      login(response);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto mt-16 max-w-md rounded-lg bg-white p-8 shadow">
      <h1 className="mb-2 text-center text-3xl font-bold">Welcome Back</h1>

      <p className="mb-8 text-center text-gray-500">Login to your account</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={loading}
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          disabled={loading}
        />

        <FormError message={error} />

        <Button type="submit" loading={loading}>
          Login
        </Button>
      </form>
    </div>
  );
}
