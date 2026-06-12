import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureAzsadminLoadbalancersApi implements ICredentialType {
        name = 'N8nDevAzureAzsadminLoadbalancersApi';

        displayName = 'Azure Azsadmin Loadbalancers API';

        icon: Icon = { light: 'file:../nodes/AzureAzsadminLoadbalancers/azure-azsadmin-loadbalancers.png', dark: 'file:../nodes/AzureAzsadminLoadbalancers/azure-azsadmin-loadbalancers.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Azsadmin Loadbalancers API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
