import React from "react";
import DaDataService from "../services/dadata-service";

const daDataService = new DaDataService();
const organiztions = async () => await daDataService.getOrganizations();

const OrganizationContext = React.createContext(organiztions());
export const OrganizationProvider = OrganizationContext.Provider;

export default OrganizationContext;
