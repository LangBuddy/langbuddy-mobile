import { NavigatorData } from "./navigator.constants";

import { ForumScreen } from "screens/ForumScreen";
import { CoursersScreen } from "screens/CoursersScreen";
import { RatingScreen } from "screens/RatingScreen";
import { ProfileScreen } from "screens/ProfileScreen";

export const NavigatorElements: Record<NavigatorData, () => React.JSX.Element> =
  {
    [NavigatorData.CoursersScreen]: CoursersScreen,
    [NavigatorData.RatingScreen]: RatingScreen,
    [NavigatorData.ForumScreen]: ForumScreen,
    [NavigatorData.ProfileScreen]: ProfileScreen,
  };
