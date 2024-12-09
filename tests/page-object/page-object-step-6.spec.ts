import { expect, test } from '../../src/fixtures/pom.fixture';
import { BugModel } from '../../src/models/bug.mode';

test.describe('Page object', () => {
  test.use({ baseURL: 'https://pwts.dev/examples/ui/po/' });

  test('Create new bug', { tag: '@po6' }, async ({ reportPage }) => {
    // Arrange
    const bug: BugModel = {
      title: 'Bug title',
      description: 'Bug description',
      steps: '1. Open the page\n2. Click the button\n3. See the bug\n4. Report the bug',
    };

    // Act
    await reportPage.open();
    await reportPage.submitNewBug(bug);

    // Assert
    await expect(reportPage.confirmationBox()).toBeVisible();
    await reportPage.closeConformationBox();
    await expect(reportPage.confirmationBox()).toBeHidden();
  });
});
