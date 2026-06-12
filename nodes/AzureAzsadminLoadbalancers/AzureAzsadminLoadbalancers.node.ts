import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureAzsadminLoadbalancers implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Azsadmin Loadbalancers',
                name: 'N8nDevAzureAzsadminLoadbalancers',
                icon: { light: 'file:./azure-azsadmin-loadbalancers.png', dark: 'file:./azure-azsadmin-loadbalancers.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Load balancer admin endpoints and objects',
                defaults: { name: 'Azure Azsadmin Loadbalancers' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureAzsadminLoadbalancersApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
