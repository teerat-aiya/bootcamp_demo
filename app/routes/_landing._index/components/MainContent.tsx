import { useState } from "react";
import { useWorkspace } from "~/hooks/workspace/useWorkspace";
import DatePicker from "./DatePicker";
import NumericScroller from "~/components/NumericScroller";
import { useInsertActivity } from "~/hooks/activities/useInsertActivity";
import { Activity } from "~/types/app";
import { randomHexString } from "~/utils/random";
import { useLineLiff } from "~/contexts/LineLiffContext";
import { Loading } from "@repo/preline";

export default function EventBooking() {
  const {  profileQuery } =
    useLineLiff();
  

  return (
    <div className="max-w-sm mx-auto bg-gray-50 min-h-screen">
      ff
    </div>
  );
}
