import Image from 'next/image'

export default function Icon() {
  return (
    <div>
      <Image
        className="object-contain invert dark:hidden"
        fill
        src="/kca_room_booking-icon.png"
        alt="kca-room-booking-icon"
      />
      <Image
        className="object-contain hidden dark:block"
        fill
        src="/kca_room_booking-icon.png"
        alt="kca-room-booking-icon"
      />
    </div>
  )
}
