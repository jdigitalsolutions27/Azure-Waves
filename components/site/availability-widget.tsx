"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CalendarCheck2, Users } from "lucide-react";

import { roomTypes } from "@/data/rooms";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

type AvailabilityWidgetProps = {
  className?: string;
  compact?: boolean;
  defaultValues?: {
    checkIn?: string;
    checkOut?: string;
    guests?: string;
    roomId?: string;
  };
};

export function AvailabilityWidget({ className, compact = false, defaultValues }: AvailabilityWidgetProps) {
  const router = useRouter();
  const [checkIn, setCheckIn] = useState(defaultValues?.checkIn ?? "");
  const [checkOut, setCheckOut] = useState(defaultValues?.checkOut ?? "");
  const [guests, setGuests] = useState(defaultValues?.guests ?? "2");
  const [roomId, setRoomId] = useState(defaultValues?.roomId ?? "any");

  const onSubmit = () => {
    const params = new URLSearchParams();
    if (checkIn) params.set("checkIn", checkIn);
    if (checkOut) params.set("checkOut", checkOut);
    if (guests) params.set("guests", guests);
    if (roomId && roomId !== "any") params.set("roomId", roomId);
    router.push(`/booking?${params.toString()}`);
  };

  return (
    <Card className={cn("border-primary/10 bg-white/95", className)}>
      <CardContent className={cn("p-5", compact ? "md:p-5" : "md:p-7")}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2">
            <Label htmlFor="checkin">Check-in</Label>
            <Input id="checkin" type="date" value={checkIn} onChange={(event) => setCheckIn(event.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="checkout">Check-out</Label>
            <Input id="checkout" type="date" value={checkOut} onChange={(event) => setCheckOut(event.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="guests">Guests</Label>
            <Select value={guests} onValueChange={setGuests}>
              <SelectTrigger id="guests" aria-label="Guests">
                <span className="inline-flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <SelectValue placeholder="Guests" />
                </span>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Guest</SelectItem>
                <SelectItem value="2">2 Guests</SelectItem>
                <SelectItem value="3">3 Guests</SelectItem>
                <SelectItem value="4">4 Guests</SelectItem>
                <SelectItem value="5">5 Guests</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="room-type">Room Type</Label>
            <Select value={roomId} onValueChange={setRoomId}>
              <SelectTrigger id="room-type" aria-label="Room type">
                <SelectValue placeholder="Room Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Room Type</SelectItem>
                {roomTypes.map((roomType) => (
                  <SelectItem key={roomType.value} value={roomType.value}>
                    {roomType.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button className="mt-5 w-full sm:w-auto" onClick={onSubmit}>
          <CalendarCheck2 className="mr-2 h-4 w-4" />
          Check Availability
        </Button>
      </CardContent>
    </Card>
  );
}

