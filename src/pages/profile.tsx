import candidatura from "@/styles/perfil.module.css";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import Layout from "@/components/Layout";
import QRCode from "react-qr-code";

interface ProfileData {
  nome: string;
  numeroEstudante: string;
  curso: string;
  turma: string;
  idade: number;
  dataConfirmacao: string;
  estado: string;
  foto: string
}

const InfoItem: React.FC<{
  label: string;
  value: string | number;
  valueClass?: string;
}> = ({ label, value, valueClass = "" }) => (
  <div className={candidatura.items}>
    <p className={candidatura.dark_g}>{label}</p>
    <p className={`${candidatura.primary} ${valueClass}`}>{value}</p>
  </div>
);

export default function ResultadosBolsas({
  profileData,
}: {
  profileData: ProfileData;
}) {
  const {
    nome,
    numeroEstudante,
    curso,
    turma,
    idade,
    dataConfirmacao,
    estado,
    foto
  } = profileData;

  // P/ gerar o QR Code
  const qrData = JSON.stringify({
    nome,
    numeroEstudante,
    curso,
    turma,
    idade,
    dataConfirmacao,
    estado,
    foto
  });

  return (
    <Layout title="Perfil">
      <div className={candidatura.container}>
        <Top information="Perfil" pagina="/services/menu" />

        <div className={candidatura.foto}>
          <Image
            src={`/img/${profileData.foto}`}
            width={130}
            height={130}
            alt={`Foto de perfil de ${profileData.nome}`}
          />
          <h2>{nome}</h2>
        </div>

        <div className={candidatura.info}>
          <InfoItem
            label="Número de estudante"
            value={profileData.numeroEstudante}
            valueClass={candidatura.estnum}
          />
          <InfoItem
            label="Curso"
            value={profileData.curso}
            valueClass={candidatura.curso}
          />
          <InfoItem
            label="Turma"
            value={profileData.turma}
            valueClass={candidatura.semestre}
          />
          <InfoItem
            label="Idade"
            value={`${profileData.idade} anos`}
            valueClass={candidatura.anolec}
          />
          <InfoItem
            label="Data da confirmação"
            value={profileData.dataConfirmacao}
            valueClass={candidatura.anoA}
          />
          <InfoItem
            label="Estado"
            value={estado}
            valueClass={
              estado === "Activo" ? candidatura.success : candidatura.fail
            }
          />
        </div>

        <div className={candidatura.qrcode}>
          <QRCode value={qrData} size={150} />
        </div>
        <Menu />
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const profileData: ProfileData = {
    nome: "Ana Correia de Assis Diogo",
    numeroEstudante: "20242190",
    curso: "Engenharia Informática",
    turma: "EINF-M2",
    idade: 22,
    dataConfirmacao: "17/09/24",
    estado: "Activo",
    foto: "id.svg"
  };

  return {
    props: { profileData },
  };
}
