import { useAuthStore } from "@/app/store/authStore";
import MyTestsPicture from "./MyTestsPicture";

export default function TestPage({ params }) {
  return <MyTestsPicture id={params.id} />;
}

export async function generateStaticParams() {
  //   const { getPictures } = useAuthStore();

  //   debugger;

  /**
   *
   * TODO
   *
   * instead of statically returning these IDs, we should get them from the authStore's function getUserImages.
   *
   * for now we are using the dummydata content, but eventually this will not be dummy
   *
   * we can not use authstore here, so the "getUserImages" function must be moved to util.js
   */
  const ids = [1, 2, 3, 4, 5]; // Replace this with your actual data fetching logic

  return ids.map((id) => ({
    id: id.toString(), // Each id must be a string
  }));
}
