<?php
// Temporary cache clearing script
// DELETE THIS FILE after running!

echo "Clearing Laravel caches...\n\n";

// Clear view cache
$viewPath = __DIR__ . '/../storage/framework/views';
if (is_dir($viewPath)) {
    $files = glob($viewPath . '/*.php');
    foreach ($files as $file) {
        unlink($file);
    }
    echo "✓ Cleared " . count($files) . " view cache files\n";
}

// Clear config cache
$configPath = __DIR__ . '/../bootstrap/cache/config.php';
if (file_exists($configPath)) {
    unlink($configPath);
    echo "✓ Cleared config cache\n";
}

// Clear route cache
$routePath = __DIR__ . '/../bootstrap/cache/routes-v7.php';
if (file_exists($routePath)) {
    unlink($routePath);
    echo "✓ Cleared route cache\n";
}

echo "\n✅ Cache cleared! Now DELETE this file for security.\n";
echo "Visit: https://mittstyremøte.no/styremote/ny\n";
?>
