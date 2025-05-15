import NextIcon from "#/assets/icons/NextJs.svg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image src={NextIcon} alt="next" width={100} height={100} />
      <h1>Hellllo world</h1>
    </>
  );
}
