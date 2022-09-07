/*******************************************************************************
 * Copyright (c) 2020. March Networks Corporation.
 * All rights reserved.
 ******************************************************************************/
import { IoAdapter } from '@nestjs/platform-socket.io';

export class AuthenticatedWsIoAdapter extends IoAdapter {
  createIOServer(port: number, options?: any): any {
    options.allowRequest = async (request, allowFunction) => {
      // const tenantId: string = request.headers.host.split(".")[0];
      //const tenantId: string = request.headers.origin.split(".")[0].split("//")[1];

      // const validationResult = await KeycloakAuthUtils.validateToken(
      //     request.headers.cookie,
      //     tenantId,
      // );

      //if (validationResult) {
      //  request.data = validationResult;
      console.log('THIS REQUEST IS TOTALLY VALID ;)');
      //request.___CHRIS = 'CHRIS';
      return allowFunction(null, true);
      //}

      //  return allowFunction("FORBIDDEN", false);
    };
    const server = super.createIOServer(port, options);

    server.use((socket, next) => {
      console.log('GENERIC MIDDLEWARE');
      next();
      // const tenantId: string = socket.request.data.iss.split(".")[0].split("//")[1];
      // // Ensure that the connection is not trying to gain access to another tenant
      // if ('' !== socket.nsp.name.substring(1)) {
      //     next(new Error('TenantID invalid!'));
      // } else {
      //     next();
      // }
    });

    // server.of(/^\/tenant-[a-zA-Z0-9]+$/).use((socket, next) => {
    //   //console.log(socket.request.___CHRIS);
    //   console.log('WE ARE IN THE MIDDLEWARE');
    //   next();
    //   // const tenantId: string = socket.request.data.iss
    //   //   .split('.')[0]
    //   //   .split('//')[1];
    //   // // Ensure that the connection is not trying to gain access to another tenant
    //   // if (tenantId !== socket.nsp.name.substring(1)) {
    //   //   next(new Error('TenantID invalid!'));
    //   // } else {
    //   //    next();
    //   // }
    // });

    return server;
  }
}
