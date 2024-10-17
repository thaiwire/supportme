import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertTriangleIcon,
  BadgeCheckIcon,
  NotebookIcon,
  PartyPopperIcon,
  User,
  UserCheck2Icon,
  UserCheckIcon,
  UserIcon,
  UserRoundIcon,
  UserRoundXIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import cm from "@/public/images/cm.jpg";
import WorkLocationTrends from "./work-location-trends";

export default function EmployeesStats() {
  const totalEmployees = 100;
  const employeesPresent = 70;
  const employeesPresentPercentage = (employeesPresent / totalEmployees) * 100;
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pd-2">
            <CardTitle className="text-base">Total Employees</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-2">
              <UserIcon />
              <div className="text-5xl font-bold">{totalEmployees}</div>
            </div>
            <div>
              <Button size="sm" asChild>
                <Link href="/dashboard/employees">View All</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pd-2">
            <CardTitle className="text-base">Employees Present</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-2">
              {employeesPresentPercentage > 75 ? (
                <UserCheck2Icon />
              ) : (
                <UserRoundXIcon />
              )}
              <div className="text-5xl font-bold">{employeesPresent}</div>
            </div>
          </CardContent>
          <CardFooter>
            {employeesPresentPercentage > 75 ? (
              <span className="text-xs text-green-500 flex flex-row items-center gap-4">
                <BadgeCheckIcon />
                {employeesPresentPercentage} % of employees present
              </span>
            ) : (
              <span className="text-xs text-red-500 flex flex-row items-center gap-4">
                <AlertTriangleIcon />
                {employeesPresentPercentage} % of employees present
              </span>
            )}
          </CardFooter>
        </Card>
        <Card className="border-pink-500 flex flex-col">
          <CardHeader className="pd-2">
            <CardTitle className="text-base">Employees of the month</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-4 items-center">
            <Avatar>
              <Image src={cm} alt={"Employee of Month"} />
              <AvatarFallback>CM</AvatarFallback>
            </Avatar>
            <span className="text-2xl">jaruwat Namvong</span>
          </CardContent>
          <CardFooter className="flex  gap-2 items-center text-xs text-muted-foreground mt-auto">
            <PartyPopperIcon className="text-red-500" />
            <span>Hello your Success</span>
          </CardFooter>
        </Card>
      </div>
      <Card className="my-4">
        <CardHeader>
          <CardTitle className="text-lg flex flex-row  gap-2">
            <NotebookIcon />
            <span>Employee Work Location Tent</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <WorkLocationTrends />
        </CardContent>
      </Card>
    </>
  );
}
