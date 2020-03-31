// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import * as policytagmanagerserializationModule from '../src';

import {protobuf} from 'google-gax';

function generateSampleMessage<T extends object>(instance: T) {
  const filledObject = (instance.constructor as typeof protobuf.Message).toObject(
    instance as protobuf.Message<T>,
    {defaults: true}
  );
  return (instance.constructor as typeof protobuf.Message).fromObject(
    filledObject
  ) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
  return error
    ? sinon.stub().rejects(error)
    : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(
  response?: ResponseType,
  error?: Error
) {
  return error
    ? sinon.stub().callsArgWith(2, error)
    : sinon.stub().callsArgWith(2, null, response);
}

describe('v1beta1.PolicyTagManagerSerializationClient', () => {
  it('has servicePath', () => {
    const servicePath =
      policytagmanagerserializationModule.v1beta1
        .PolicyTagManagerSerializationClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint =
      policytagmanagerserializationModule.v1beta1
        .PolicyTagManagerSerializationClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port =
      policytagmanagerserializationModule.v1beta1
        .PolicyTagManagerSerializationClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no option', () => {
    const client = new policytagmanagerserializationModule.v1beta1.PolicyTagManagerSerializationClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new policytagmanagerserializationModule.v1beta1.PolicyTagManagerSerializationClient(
      {
        fallback: true,
      }
    );
    assert(client);
  });

  it('has initialize method and supports deferred initialization', async () => {
    const client = new policytagmanagerserializationModule.v1beta1.PolicyTagManagerSerializationClient(
      {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      }
    );
    assert.strictEqual(client.policyTagManagerSerializationStub, undefined);
    await client.initialize();
    assert(client.policyTagManagerSerializationStub);
  });

  it('has close method', () => {
    const client = new policytagmanagerserializationModule.v1beta1.PolicyTagManagerSerializationClient(
      {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      }
    );
    client.close();
  });

  it('has getProjectId method', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new policytagmanagerserializationModule.v1beta1.PolicyTagManagerSerializationClient(
      {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      }
    );
    client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
    const result = await client.getProjectId();
    assert.strictEqual(result, fakeProjectId);
    assert((client.auth.getProjectId as SinonStub).calledWithExactly());
  });

  it('has getProjectId method with callback', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new policytagmanagerserializationModule.v1beta1.PolicyTagManagerSerializationClient(
      {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      }
    );
    client.auth.getProjectId = sinon
      .stub()
      .callsArgWith(0, null, fakeProjectId);
    const promise = new Promise((resolve, reject) => {
      client.getProjectId((err?: Error | null, projectId?: string | null) => {
        if (err) {
          reject(err);
        } else {
          resolve(projectId);
        }
      });
    });
    const result = await promise;
    assert.strictEqual(result, fakeProjectId);
  });

  describe('importTaxonomies', () => {
    it('invokes importTaxonomies without error', async () => {
      const client = new policytagmanagerserializationModule.v1beta1.PolicyTagManagerSerializationClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.datacatalog.v1beta1.ImportTaxonomiesRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.datacatalog.v1beta1.ImportTaxonomiesResponse()
      );
      client.innerApiCalls.importTaxonomies = stubSimpleCall(expectedResponse);
      const [response] = await client.importTaxonomies(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.importTaxonomies as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes importTaxonomies without error using callback', async () => {
      const client = new policytagmanagerserializationModule.v1beta1.PolicyTagManagerSerializationClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.datacatalog.v1beta1.ImportTaxonomiesRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.datacatalog.v1beta1.ImportTaxonomiesResponse()
      );
      client.innerApiCalls.importTaxonomies = stubSimpleCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.importTaxonomies(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.datacatalog.v1beta1.IImportTaxonomiesResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.importTaxonomies as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes importTaxonomies with error', async () => {
      const client = new policytagmanagerserializationModule.v1beta1.PolicyTagManagerSerializationClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.datacatalog.v1beta1.ImportTaxonomiesRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.importTaxonomies = stubSimpleCall(
        undefined,
        expectedError
      );
      assert.rejects(async () => {
        await client.importTaxonomies(request);
      }, expectedError);
      assert(
        (client.innerApiCalls.importTaxonomies as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('exportTaxonomies', () => {
    it('invokes exportTaxonomies without error', async () => {
      const client = new policytagmanagerserializationModule.v1beta1.PolicyTagManagerSerializationClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.datacatalog.v1beta1.ExportTaxonomiesRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.datacatalog.v1beta1.ExportTaxonomiesResponse()
      );
      client.innerApiCalls.exportTaxonomies = stubSimpleCall(expectedResponse);
      const [response] = await client.exportTaxonomies(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.exportTaxonomies as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes exportTaxonomies without error using callback', async () => {
      const client = new policytagmanagerserializationModule.v1beta1.PolicyTagManagerSerializationClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.datacatalog.v1beta1.ExportTaxonomiesRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.datacatalog.v1beta1.ExportTaxonomiesResponse()
      );
      client.innerApiCalls.exportTaxonomies = stubSimpleCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.exportTaxonomies(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.datacatalog.v1beta1.IExportTaxonomiesResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.exportTaxonomies as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes exportTaxonomies with error', async () => {
      const client = new policytagmanagerserializationModule.v1beta1.PolicyTagManagerSerializationClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.datacatalog.v1beta1.ExportTaxonomiesRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.exportTaxonomies = stubSimpleCall(
        undefined,
        expectedError
      );
      assert.rejects(async () => {
        await client.exportTaxonomies(request);
      }, expectedError);
      assert(
        (client.innerApiCalls.exportTaxonomies as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('Path templates', () => {
    describe('entry', () => {
      const fakePath = '/rendered/path/entry';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
        entry_group: 'entryGroupValue',
        entry: 'entryValue',
      };
      const client = new policytagmanagerserializationModule.v1beta1.PolicyTagManagerSerializationClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      client.pathTemplates.entryPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.entryPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('entryPath', () => {
        const result = client.entryPath(
          'projectValue',
          'locationValue',
          'entryGroupValue',
          'entryValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.entryPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromEntryName', () => {
        const result = client.matchProjectFromEntryName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.entryPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromEntryName', () => {
        const result = client.matchLocationFromEntryName(fakePath);
        assert.strictEqual(result, 'locationValue');
        assert(
          (client.pathTemplates.entryPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchEntryGroupFromEntryName', () => {
        const result = client.matchEntryGroupFromEntryName(fakePath);
        assert.strictEqual(result, 'entryGroupValue');
        assert(
          (client.pathTemplates.entryPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchEntryFromEntryName', () => {
        const result = client.matchEntryFromEntryName(fakePath);
        assert.strictEqual(result, 'entryValue');
        assert(
          (client.pathTemplates.entryPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('entryGroup', () => {
      const fakePath = '/rendered/path/entryGroup';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
        entry_group: 'entryGroupValue',
      };
      const client = new policytagmanagerserializationModule.v1beta1.PolicyTagManagerSerializationClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      client.pathTemplates.entryGroupPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.entryGroupPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('entryGroupPath', () => {
        const result = client.entryGroupPath(
          'projectValue',
          'locationValue',
          'entryGroupValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.entryGroupPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromEntryGroupName', () => {
        const result = client.matchProjectFromEntryGroupName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.entryGroupPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromEntryGroupName', () => {
        const result = client.matchLocationFromEntryGroupName(fakePath);
        assert.strictEqual(result, 'locationValue');
        assert(
          (client.pathTemplates.entryGroupPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchEntryGroupFromEntryGroupName', () => {
        const result = client.matchEntryGroupFromEntryGroupName(fakePath);
        assert.strictEqual(result, 'entryGroupValue');
        assert(
          (client.pathTemplates.entryGroupPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('location', () => {
      const fakePath = '/rendered/path/location';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
      };
      const client = new policytagmanagerserializationModule.v1beta1.PolicyTagManagerSerializationClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      client.pathTemplates.locationPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.locationPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('locationPath', () => {
        const result = client.locationPath('projectValue', 'locationValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.locationPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromLocationName', () => {
        const result = client.matchProjectFromLocationName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.locationPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromLocationName', () => {
        const result = client.matchLocationFromLocationName(fakePath);
        assert.strictEqual(result, 'locationValue');
        assert(
          (client.pathTemplates.locationPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('policyTag', () => {
      const fakePath = '/rendered/path/policyTag';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
        taxonomy: 'taxonomyValue',
        policy_tag: 'policyTagValue',
      };
      const client = new policytagmanagerserializationModule.v1beta1.PolicyTagManagerSerializationClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      client.pathTemplates.policyTagPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.policyTagPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('policyTagPath', () => {
        const result = client.policyTagPath(
          'projectValue',
          'locationValue',
          'taxonomyValue',
          'policyTagValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.policyTagPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromPolicyTagName', () => {
        const result = client.matchProjectFromPolicyTagName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.policyTagPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromPolicyTagName', () => {
        const result = client.matchLocationFromPolicyTagName(fakePath);
        assert.strictEqual(result, 'locationValue');
        assert(
          (client.pathTemplates.policyTagPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchTaxonomyFromPolicyTagName', () => {
        const result = client.matchTaxonomyFromPolicyTagName(fakePath);
        assert.strictEqual(result, 'taxonomyValue');
        assert(
          (client.pathTemplates.policyTagPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchPolicyTagFromPolicyTagName', () => {
        const result = client.matchPolicyTagFromPolicyTagName(fakePath);
        assert.strictEqual(result, 'policyTagValue');
        assert(
          (client.pathTemplates.policyTagPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('project', () => {
      const fakePath = '/rendered/path/project';
      const expectedParameters = {
        project: 'projectValue',
      };
      const client = new policytagmanagerserializationModule.v1beta1.PolicyTagManagerSerializationClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      client.pathTemplates.projectPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.projectPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('projectPath', () => {
        const result = client.projectPath('projectValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.projectPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromProjectName', () => {
        const result = client.matchProjectFromProjectName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.projectPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('tag', () => {
      const fakePath = '/rendered/path/tag';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
        entry_group: 'entryGroupValue',
        entry: 'entryValue',
        tag: 'tagValue',
      };
      const client = new policytagmanagerserializationModule.v1beta1.PolicyTagManagerSerializationClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      client.pathTemplates.tagPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.tagPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('tagPath', () => {
        const result = client.tagPath(
          'projectValue',
          'locationValue',
          'entryGroupValue',
          'entryValue',
          'tagValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.tagPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromTagName', () => {
        const result = client.matchProjectFromTagName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.tagPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromTagName', () => {
        const result = client.matchLocationFromTagName(fakePath);
        assert.strictEqual(result, 'locationValue');
        assert(
          (client.pathTemplates.tagPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchEntryGroupFromTagName', () => {
        const result = client.matchEntryGroupFromTagName(fakePath);
        assert.strictEqual(result, 'entryGroupValue');
        assert(
          (client.pathTemplates.tagPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchEntryFromTagName', () => {
        const result = client.matchEntryFromTagName(fakePath);
        assert.strictEqual(result, 'entryValue');
        assert(
          (client.pathTemplates.tagPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchTagFromTagName', () => {
        const result = client.matchTagFromTagName(fakePath);
        assert.strictEqual(result, 'tagValue');
        assert(
          (client.pathTemplates.tagPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('tagTemplate', () => {
      const fakePath = '/rendered/path/tagTemplate';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
        tag_template: 'tagTemplateValue',
      };
      const client = new policytagmanagerserializationModule.v1beta1.PolicyTagManagerSerializationClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      client.pathTemplates.tagTemplatePathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.tagTemplatePathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('tagTemplatePath', () => {
        const result = client.tagTemplatePath(
          'projectValue',
          'locationValue',
          'tagTemplateValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.tagTemplatePathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromTagTemplateName', () => {
        const result = client.matchProjectFromTagTemplateName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.tagTemplatePathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromTagTemplateName', () => {
        const result = client.matchLocationFromTagTemplateName(fakePath);
        assert.strictEqual(result, 'locationValue');
        assert(
          (client.pathTemplates.tagTemplatePathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchTagTemplateFromTagTemplateName', () => {
        const result = client.matchTagTemplateFromTagTemplateName(fakePath);
        assert.strictEqual(result, 'tagTemplateValue');
        assert(
          (client.pathTemplates.tagTemplatePathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('tagTemplateField', () => {
      const fakePath = '/rendered/path/tagTemplateField';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
        tag_template: 'tagTemplateValue',
        field: 'fieldValue',
      };
      const client = new policytagmanagerserializationModule.v1beta1.PolicyTagManagerSerializationClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      client.pathTemplates.tagTemplateFieldPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.tagTemplateFieldPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('tagTemplateFieldPath', () => {
        const result = client.tagTemplateFieldPath(
          'projectValue',
          'locationValue',
          'tagTemplateValue',
          'fieldValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.tagTemplateFieldPathTemplate
            .render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromTagTemplateFieldName', () => {
        const result = client.matchProjectFromTagTemplateFieldName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.tagTemplateFieldPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromTagTemplateFieldName', () => {
        const result = client.matchLocationFromTagTemplateFieldName(fakePath);
        assert.strictEqual(result, 'locationValue');
        assert(
          (client.pathTemplates.tagTemplateFieldPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchTagTemplateFromTagTemplateFieldName', () => {
        const result = client.matchTagTemplateFromTagTemplateFieldName(
          fakePath
        );
        assert.strictEqual(result, 'tagTemplateValue');
        assert(
          (client.pathTemplates.tagTemplateFieldPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchFieldFromTagTemplateFieldName', () => {
        const result = client.matchFieldFromTagTemplateFieldName(fakePath);
        assert.strictEqual(result, 'fieldValue');
        assert(
          (client.pathTemplates.tagTemplateFieldPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('taxonomy', () => {
      const fakePath = '/rendered/path/taxonomy';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
        taxonomy: 'taxonomyValue',
      };
      const client = new policytagmanagerserializationModule.v1beta1.PolicyTagManagerSerializationClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      client.pathTemplates.taxonomyPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.taxonomyPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('taxonomyPath', () => {
        const result = client.taxonomyPath(
          'projectValue',
          'locationValue',
          'taxonomyValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.taxonomyPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromTaxonomyName', () => {
        const result = client.matchProjectFromTaxonomyName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.taxonomyPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromTaxonomyName', () => {
        const result = client.matchLocationFromTaxonomyName(fakePath);
        assert.strictEqual(result, 'locationValue');
        assert(
          (client.pathTemplates.taxonomyPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchTaxonomyFromTaxonomyName', () => {
        const result = client.matchTaxonomyFromTaxonomyName(fakePath);
        assert.strictEqual(result, 'taxonomyValue');
        assert(
          (client.pathTemplates.taxonomyPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });
  });
});
