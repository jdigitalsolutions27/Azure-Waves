"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";

import { rooms } from "@/data/rooms";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RoomCard } from "@/components/site/room-card";
import { formatCurrency } from "@/lib/utils";

export function StayCatalog() {
  const [maxPrice, setMaxPrice] = useState(1000);
  const [capacity, setCapacity] = useState("any");
  const [bedType, setBedType] = useState("any");
  const [viewFilter, setViewFilter] = useState<string[]>([]);
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [sort, setSort] = useState("recommended");
  const [compare, setCompare] = useState<string[]>([]);

  const filteredRooms = useMemo(() => {
    let result = rooms.filter((room) => room.price <= maxPrice);

    if (capacity !== "any") {
      result = result.filter((room) => room.capacity >= Number(capacity));
    }

    if (bedType !== "any") {
      result = result.filter((room) => room.bedType.toLowerCase().includes(bedType));
    }

    if (viewFilter.length > 0) {
      result = result.filter((room) => viewFilter.includes(room.view));
    }

    if (featuredOnly) {
      result = result.filter((room) => room.featured);
    }

    if (sort === "price-asc") {
      result = result.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-desc") {
      result = result.sort((a, b) => b.price - a.price);
    }

    if (sort === "capacity") {
      result = result.sort((a, b) => b.capacity - a.capacity);
    }

    return result;
  }, [maxPrice, capacity, bedType, viewFilter, featuredOnly, sort]);

  const compareRooms = rooms.filter((room) => compare.includes(room.id));

  const toggleCompare = (roomId: string) => {
    setCompare((prev) => {
      if (prev.includes(roomId)) return prev.filter((id) => id !== roomId);
      if (prev.length >= 3) return prev;
      return [...prev, roomId];
    });
  };

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-primary/10 bg-white/90 p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="grid flex-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <Label htmlFor="max-price">Price up to</Label>
              <Input
                id="max-price"
                type="number"
                value={maxPrice}
                min={200}
                max={1000}
                step={10}
                onChange={(event) => setMaxPrice(Number(event.target.value))}
              />
            </div>

            <div>
              <Label htmlFor="capacity">Capacity</Label>
              <Select value={capacity} onValueChange={setCapacity}>
                <SelectTrigger id="capacity">
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="2">2+ Guests</SelectItem>
                  <SelectItem value="3">3+ Guests</SelectItem>
                  <SelectItem value="4">4+ Guests</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="bed-type">Bed Type</Label>
              <Select value={bedType} onValueChange={setBedType}>
                <SelectTrigger id="bed-type">
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="king">King</SelectItem>
                  <SelectItem value="queen">Queen</SelectItem>
                  <SelectItem value="double">Double</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="sort">Sort</Label>
              <Select value={sort} onValueChange={setSort}>
                <SelectTrigger id="sort">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Recommended</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="capacity">Highest Capacity</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  View Filters
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Room View</DropdownMenuLabel>
                <DropdownMenuCheckboxItem
                  checked={viewFilter.includes("Ocean")}
                  onCheckedChange={(checked) =>
                    setViewFilter((prev) =>
                      checked ? [...prev, "Ocean"] : prev.filter((item) => item !== "Ocean"),
                    )
                  }
                >
                  Ocean View
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={viewFilter.includes("Garden")}
                  onCheckedChange={(checked) =>
                    setViewFilter((prev) =>
                      checked ? [...prev, "Garden"] : prev.filter((item) => item !== "Garden"),
                    )
                  }
                >
                  Garden View
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={viewFilter.includes("Lagoon")}
                  onCheckedChange={(checked) =>
                    setViewFilter((prev) =>
                      checked ? [...prev, "Lagoon"] : prev.filter((item) => item !== "Lagoon"),
                    )
                  }
                >
                  Lagoon View
                </DropdownMenuCheckboxItem>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked={featuredOnly} onCheckedChange={(checked) => setFeaturedOnly(Boolean(checked))}>
                  Featured Only
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" onClick={() => setCompare([])} className="flex-1 sm:flex-none">
              Clear Compare
            </Button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredRooms.map((room) => (
          <div key={room.id} className="space-y-2">
            <RoomCard room={room} />
            <Button
              variant={compare.includes(room.id) ? "default" : "outline"}
              size="sm"
              className="w-full"
              onClick={() => toggleCompare(room.id)}
            >
              {compare.includes(room.id) ? "Selected for Compare" : "Compare Room"}
            </Button>
          </div>
        ))}
      </div>

      {compareRooms.length > 0 ? (
        <div className="rounded-3xl border border-primary/20 bg-white/95 p-5">
          <h3 className="font-display text-2xl">Compare Rooms</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {compareRooms.map((room) => (
              <div key={room.id} className="rounded-2xl border border-border/60 p-4 text-sm">
                <p className="font-semibold text-foreground">{room.name}</p>
                <p className="mt-1 text-muted-foreground">{formatCurrency(room.price)} / night</p>
                <p className="mt-1 text-muted-foreground">{room.capacity} guests</p>
                <p className="mt-1 text-muted-foreground">{room.size} - {room.bedType}</p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}


