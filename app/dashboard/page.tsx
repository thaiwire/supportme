import { Tabs } from "@/components/ui/tabs";
import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EmployeesStats from "./components/employees/employees-stats";

export default function dashboardPage() {
  return (
    <Tabs defaultValue="emploees">
      <TabsList className="mb-4">
        <TabsTrigger value={"employees"}>Employee Stats</TabsTrigger>
        <TabsTrigger value={"teams"}>Teams Stats</TabsTrigger>
      </TabsList>
      <TabsContent value="employees">
        <EmployeesStats />
      </TabsContent>
      <TabsContent value="teams">team stat view</TabsContent>
    </Tabs>
  );
}
