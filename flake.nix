{
  description = "Development environment for this project";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-parts.url = "github:hercules-ci/flake-parts";
    treefmt-nix.url = "github:numtide/treefmt-nix";
  };

  outputs =
    inputs@{ flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } (
      { lib, ... }:
      {
        systems = lib.systems.flakeExposed;
        imports = [
          inputs.treefmt-nix.flakeModule
          ./nix/treefmt.nix
        ];
        perSystem =
          { pkgs, ... }:
          {
            devShells.default = pkgs.mkShell {
              packages = with pkgs; [
                bashInteractive
                nodejs
                pnpm
                python3
                prettier
                ffmpeg
                just
                nodePackages.tailwindcss
              ];

              shellHook = ''
                echo "Homepage development environment"
                echo ""
                echo "Available commands:"
                just -l
                echo ""
              '';
            };

            packages.default = pkgs.stdenv.mkDerivation {
              pname = "homepage";
              version = "1.0.0";

              src = ./.;

              nativeBuildInputs = with pkgs; [
                nodePackages.tailwindcss
              ];

              buildPhase = ''
                mkdir -p $out

                tailwindcss -i ./input.css -o $out/output.css --minify

                cp -r index.html category.html posts js data images $out/
              '';

              installPhase = ''
                echo "Website built successfully to $out"
              '';
            };
          };
      }
    );
}
