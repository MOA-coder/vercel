import Image from "next/image";
import erro from "@/styles/erroTamanho.module.css";
import Layout from "@/components/Layout";

export default function ErroTamanho() {
  return (
    <Layout title="Dispositivo não suportado!">
      <div className={erro.container}>
        <Image
          className={erro.icon}
          src={"/img/logo.svg"}
          alt="Logotipo Multischool AO"
          width={90}
          height={90}
          priority
        />
        <p>
          Lamentamos, mas o tamanho do seu dispositivo ainda não é compatível.
          Por favor, aceda com um dispositivo de tamanho menor.
        </p>
      </div>
    </Layout>
  );
}
