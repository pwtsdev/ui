import { expect, test } from '../../src/fixtures/pom.fixture';

test.describe('M09 - solution', () => {
  test.use({ baseURL: 'https://pwts.dev/examples/ui/po/' });

  test('add comment to high priority issue', { tag: ['@M09', '@solution'] }, async ({ homePage, bugDetailsPage }) => {
    // Arrange
    const priority = 'High Priority';
    const comment = 'sample comment';

    // Act
    await homePage.open();
    await homePage.getAllBugsWithPriority(priority).first().click();

    // Assert
    expect(await bugDetailsPage.getDescription()).toBeTruthy();
    expect(await bugDetailsPage.getStepsToReproduce()).toBeTruthy();

    await bugDetailsPage.addComment(comment);

    await expect(bugDetailsPage.confirmation.box()).toBeVisible();
    await bugDetailsPage.confirmation.close();
    await expect(bugDetailsPage.confirmation.box()).toBeHidden();
  });
});
