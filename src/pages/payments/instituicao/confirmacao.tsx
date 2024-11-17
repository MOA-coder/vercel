import pay from "@/styles/payments/instituicao/confirmacao.module.css";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import PurpleButton from "@/components/buttons";
import Layout from "@/components/Layout";

// Dados do usuário
const userDetails = [
  {
    label: "Nome",
    value: "Ana Correia de Assis Diogo",
    classes: `${pay.primary} ${pay.name}`,
  },
  {
    label: "Ano lectivo",
    value: "2024/25",
    classes: `${pay.primary} ${pay.anolec}`,
  },
  {
    label: "Semestre",
    value: "IVº",
    classes: `${pay.primary} ${pay.semestre}`,
  },
  {
    label: "Ano acadêmico",
    value: "3º",
    classes: `${pay.primary} ${pay.anoA}`,
  },
  {
    label: "Número de estudante",
    value: "20242190",
    classes: `${pay.primary} ${pay.estnum}`,
  },
  { label: "Curso", value: "Engenharia informática", classes: `${pay.curso}` },
  { label: "Turma", value: "EINF-M3", classes: `${pay.success} ${pay.turma}` },
];

// Caminho dinâmico da foto
const fotoPath = "/avatars/fotoE.svg";

export default function PagInst() {
  return (
    <Layout title="Confirmação da matrícula">
      <div className={pay.container}>
        <Top information="Confirmação" pagina="/payments/pagInst" />
        <div className={pay.foto}>
          <Image src={fotoPath} width={190} height={190} alt="Foto de estudante" className={pay.innerFoto}/>
        </div>
        <div className={pay.info}>
          {userDetails.map((detail, index) => (
            <div key={index} className={pay.items}>
              <p className={pay.dark_g}>{detail.label}</p>
              <p className={detail.classes}>{detail.value}</p>
            </div>
          ))}
        </div>
        <div className={pay.button}>
          <PurpleButton description="Continucar" redirect="confirm2" />
        </div>
        <Menu />
      </div>
    </Layout>
  );
}
