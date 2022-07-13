import React from "react";
import { TouchableOpacity } from "react-native";
import { List } from "react-native-paper";

export const ListComponent = () => {
  return (
    <>
      <TouchableOpacity>
        <List.Item
          title="Settings"
          description="Privacy and Logout"
          left={(props) => (
            <List.Icon {...props} icon="database-settings-outline" />
          )}
          right={(props) => <List.Icon {...props} icon="arrow-right" />}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <List.Item
          title="Help and Support"
          description="Help Center and legal terms"
          left={(props) => <List.Icon {...props} icon="help-box" />}
          right={(props) => <List.Icon {...props} icon="arrow-right" />}
        />
      </TouchableOpacity>
    </>
  );
};
