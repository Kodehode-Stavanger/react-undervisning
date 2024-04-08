import { useParams } from "react-router-dom";

export default function ProfilePage() {
  const { profileId } = useParams();

  return <h1>Profile page number {profileId}</h1>;
}
