-- CreateTable
CREATE TABLE `Plan` (
    `id` INTEGER NOT NULL,
    `planname` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
