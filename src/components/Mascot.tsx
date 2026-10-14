import Image from 'next/image';
export default function Mascot({ className = '' }: { className?: string }) {
  return <Image src="/mascots/mouflon.svg" alt="Le mouflon souriant, mascotte de PROVINCIA" width={420} height={470} priority className={className} />;
}
